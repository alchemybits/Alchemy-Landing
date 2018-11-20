import "./Admin.css";
import React from "react";
import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardBody from "components/Card/CardBody.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import ImageUpload from "components/CustomUpload/ImageUpload.jsx";
import InputAdornment from "@material-ui/core/InputAdornment";
import CustomInput from "components/CustomInput/CustomInput.jsx";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import InputLabel from "@material-ui/core/InputLabel";
import Palette from "@material-ui/icons/Palette";

import NavPills from "components/NavPills/NavPills.jsx";

import Send from "@material-ui/icons/Save";
import Button from "components/CustomButtons/Button.jsx";

function template() {
  const { classes } = this.props;
  return (
    <div className="add-product">
      <Card>
        <CardHeader color="primary">
          <h4 className={classes.cardTitleWhite}>Agregar Producto</h4>
          <p className={classes.cardCategoryWhite}>
            Aqui podras agregar todos los prductos para tu inventario.
          </p>
        </CardHeader>
        <CardBody>
          <div id="file-uploader">
            <div className={classes.title}>
              <h3>File Uploader</h3>
            </div>
            <GridContainer>
              <GridItem xs={12} sm={12} md={6} lg={3}>
                <h4>Regular Image</h4>
                <ImageUpload
                  addButtonProps={{ round: true }}
                  changeButtonProps={{ round: true }}
                  removeButtonProps={{ round: true, color: "danger" }}
                />
              </GridItem>
              <GridItem xs={12} sm={12} md={6} lg={5}>
                <GridContainer>
                  <GridItem xs={12} sm={8} md={8}>
                    <CustomInput
                      labelText="Nombre"
                      id="font-awesome"
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        endAdornment: (
                          <InputAdornment position="end">
                            <i className="fas fa-clipboard" />
                          </InputAdornment>
                        )
                      }}
                    />
                  </GridItem>
                  <GridItem xs={12} sm={12} md={4}>
                    <CustomInput
                      labelText="Cantidad #"
                      id="font-awesome"
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        type: "number",
                        endAdornment: (
                          <InputAdornment position="end">
                            <i className="fas fa-sort-amount-up" />
                          </InputAdornment>
                        )
                      }}
                    />
                  </GridItem>

                  <GridItem xs={12} sm={6} md={6}>
                    <CustomInput
                      labelText="SKU"
                      id="font-awesome"
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        endAdornment: (
                          <InputAdornment position="end">
                            <i className="fas fa-cogs" />
                          </InputAdornment>
                        )
                      }}
                    />
                  </GridItem>

                  <GridItem xs={12} sm={6} md={6}>
                    <CustomInput
                      labelText="UPC"
                      id="font-awesome"
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        endAdornment: (
                          <InputAdornment position="end">
                            <i className="fas fa-cogs" />
                          </InputAdornment>
                        )
                      }}
                      style={{ marginTop: "25px" }}
                      fullWidth
                      className={classes.selectFormControl}
                    />
                      <InputLabel
                        htmlFor="simple-select"
                        className={classes.selectLabel}
                      >
                        Status
                      </InputLabel>
                      <Select
                        MenuProps={{
                          className: classes.selectMenu
                        }}
                        classes={{
                          select: classes.select
                        }}
                        value={this.state.simpleSelect}
                        onChange={this.handleSimple}
                        inputProps={{
                          name: "simpleSelect",
                          id: "simple-select"
                        }}
                      >
                        <MenuItem
                          disabled
                          classes={{
                            root: classes.selectMenuItem
                          }}
                        >
                          Status
                        </MenuItem>
                        <MenuItem
                          classes={{
                            root: classes.selectMenuItem,
                            selected: classes.selectMenuItemSelected
                          }}
                          value="2"
                        >
                          Disponible
                        </MenuItem>
                        <MenuItem
                          classes={{
                            root: classes.selectMenuItem,
                            selected: classes.selectMenuItemSelected
                          }}
                          value="3"
                        >
                          No Disponible
                        </MenuItem>
                        <MenuItem
                          classes={{
                            root: classes.selectMenuItem,
                            selected: classes.selectMenuItemSelected
                          }}
                          value="4"
                        >
                          Descontinuado
                        </MenuItem>
                      </Select>
                    </FormControl>
                  </GridItem>
                  <GridItem xs={12} sm={12} md={12}>
                    <CustomInput
                      labelText="Escribe una breve descripcion del producto"
                      id="textarea-input"
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        multiline: true,
                        rows: 5
                      }}
                    />
                  </GridItem>
                </GridContainer>
              </GridItem>
              <GridItem
                xs={12}
                sm={12}
                md={12}
                lg={4}
                style={{ borderLeft: "1pt dashed lightgrey" }}
              >
                <h3>
                  <small>Variantes</small>
                </h3>
                <NavPills
                  id="navpill"
                  color="rose"
                  tabs={[
                    {
                      tabButton: "Agregar +",
                      tabContent: (
                        <span>
                          <h4>Nombre</h4>
                          <br />
                          <p>
                            Precio: <small> 100 Lps </small>
                          </p>
                          <p>
                            Color: <small>Amarillo</small>
                          </p>
                          <p>
                            Tamaño: <small>3.5</small>
                          </p>
                        </span>
                      )
                    },
                    {
                      tabButton: "Settings",
                      tabContent: (
                        <span>
                          <p>
                            Efficiently unleash cross-media information without
                            cross-media value. Quickly maximize timely
                            deliverables for real-time schemas.{" "}
                          </p>
                          <br />
                          <p>
                            Dramatically maintain clicks-and-mortar solutions
                            without functional solutions.
                          </p>
                        </span>
                      )
                    },
                    {
                      tabButton: "XL",
                      tabContent: (
                        <span>
                          <p>
                            Completely synergize resource taxing relationships
                            via premier niche markets. Professionally cultivate
                            one-to-one customer service with robust ideas.{" "}
                          </p>
                          <br />
                          <p>
                            Dynamically innovate resource-leveling customer
                            service for state of the art customer service.
                          </p>
                        </span>
                      )
                    }
                  ]}
                />
              </GridItem>
              <GridItem align-items-xs-center justify-xs-flex-end>
                <Button
                  color="primary"
                  style={{ right: 0, float: "right" }}
                  round
                >
                  <Send className={classes.icons} /> Save
                </Button>
              </GridItem>
            </GridContainer>
          </div>
        </CardBody>
      </Card>
    </div>
  );
}
export default template;
