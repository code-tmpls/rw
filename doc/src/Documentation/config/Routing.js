import React from 'react';
import { Navigate } from 'react-router-dom';
import { Page } from '@DocCore/Page.js';

import { AccordianPage } from '@DocComponents/accordian/index.js';
import { AccordianListItemsPage } from '@DocComponents/accordianListItems/index.js';
import { AlertPage } from '@DocComponents/alert/index.js';
import { AvatarPage } from '@DocComponents/avatar/index.js';
import { BadgePage } from '@DocComponents/badge/index.js';
import { BreadcrumbPage } from '@DocComponents/breadcrumb/index.js';
import { ButtonPage } from '@DocComponents/button/index.js';
import { CardPage } from '@DocComponents/card/index.js';
import { CarouselPage } from '@DocComponents/carousel/index.js';
import { CascaderPage } from '@DocComponents/cascader/index.js';
import { ElementGroupPage } from '@DocComponents/elementGroup/index.js';
import { ListGroupPage } from '@DocComponents/listGroup/index.js';
import { LoadingPage } from '@DocComponents/loading/index.js';
import { ModalPage } from '@DocComponents/modal/index.js';
import { RuleBuilderPage } from '@DocComponents/ruleBuilder/index.js';
import { TablePage } from '@DocComponents/table/index.js';
import { TabsPage } from '@DocComponents/tabs/index.js';
import { TagPage } from '@DocComponents/tag/index.js';
import { ToastPage } from '@DocComponents/toast/index.js';
import { ToolTipPage } from '@DocComponents/toolTip/index.js';

import { AppRoutingPage } from '@DocFeatures/appRouting/index.js';
import { SpeechListenerPage } from '@DocFeatures/speechListener/index.js';

import { SelectPage } from '@DocFormElements/select/index.js';
import { TextBoxPage } from '@DocFormElements/textBox/index.js';
import { TextAreaPage } from '@DocFormElements/textArea/index.js';
import { ColorPickerPage } from '@DocFormElements/colorPicker/index.js';
import { ChoicePage } from '@DocFormElements/choice/index.js';
import { DateTimePickerPage } from '@DocFormElements/dateTimePicker/index.js';
import { RangePage } from '@DocFormElements/range/index.js';
import { InputGroupPage } from '@DocFormElements/inputGroup/index.js';

import { AreaChartPage } from '@DocVisualization/areaChart/index.js';
import { BarChartPage } from '@DocVisualization/barChart/index.js';
import { BoxChartPage } from '@DocVisualization/boxChart/index.js';
import { CompositionChartPage } from '@DocVisualization/compositionChart/index.js';
import { CorrelationChartPage } from '@DocVisualization/correlationChart/index.js';
import { DendogramChartPage } from '@DocVisualization/dendogramChart/index.js';
import { FunnelChartPage } from '@DocVisualization/funnelChart/index.js';
import { LineChartPage } from '@DocVisualization/lineChart/index.js';
import { PieChartPage } from '@DocVisualization/pieChart/index.js';
import { SankeyChartPage } from '@DocVisualization/sankeyChart/index.js';
import { ScatterChartPage } from '@DocVisualization/scatterChart/index.js';
import { TreeMapChartPage } from '@DocVisualization/treeMapChart/index.js';
import { TwoByTwoChartPage } from '@DocVisualization/twoByTwoChart/index.js';
import { VennChartPage } from '@DocVisualization/vennChart/index.js';
import { WaterfallChartPage } from '@DocVisualization/waterfallChart/index.js';

import { AppColorsPage } from '@DocThemes/appColors/index.js';
import { HighlightPage } from '@DocCodeEditorsViewers/highlight/index.js';
import { ReduxPage } from '@DocAdvancedTopics/redux/index.js';
import { AuthenticationPage } from '@DocReadyMadeScreen/authentication/index.js';
import { ReadyMadeDropdownsPage } from '@DocReadyMadeScreen/readyMadeDropdowns/index.js';



const baseURL = 'http://localhost:8080/';

const Home = ({ param }) =>{
 return (<div>{param}</div>);
};

export const Routes = [
    { path:"/", component: <Navigate to="Component/AccordianList" /> },
    { path:"Component/AccordianList", component:<Page content={<AccordianPage />} /> },
    { path:"Component/AccordianListItems", component:<Page content={<AccordianListItemsPage />} /> },
    { path:"Component/Alert", component:<Page content={<AlertPage />} /> },
    { path:"Component/Avatar", component:<Page content={<AvatarPage />} /> },
    { path:"Component/Badge", component:<Page content={<BadgePage />} /> },
    { path:"Component/Breadcrumb", component:<Page content={<BreadcrumbPage />} /> },
    { path:"Component/Button", component:<Page content={<ButtonPage />} /> },
    { path:"Component/Card", component:<Page content={<CardPage />} /> },
    { path:"Component/Carousel", component:<Page content={<CarouselPage />} /> },
    { path:"Component/Cascader", component:<Page content={<CascaderPage />} /> },
    { path:"Component/ElementGroup", component:<Page content={<ElementGroupPage />} /> },
    { path:"Component/ListGroup", component:<Page content={<ListGroupPage />} /> },
    { path:"Component/Loading", component:<Page content={<LoadingPage />} /> },
    { path:"Component/Modal", component:<Page content={<ModalPage />} /> },
    { path:"Component/RuleBuilder", component:<Page content={<RuleBuilderPage />} /> },
    { path:"Component/Table", component:<Page content={<TablePage />} /> },
    { path:"Component/Tabs", component:<Page content={<TabsPage />} /> },
    { path:"Component/Tag", component:<Page content={<TagPage />} /> },
    { path:"Component/Toast", component:<Page content={<ToastPage />} /> },
    { path:"Component/ToolTip", component:<Page content={<ToolTipPage />} /> },
    
    { path:"Feature/AppRouting", component:<Page content={<AppRoutingPage />} /> },
    { path:"Feature/SpeechListener", component:<Page content={<SpeechListenerPage />} /> },

    { path:"FormElement/Select", component:<Page content={<SelectPage />} /> },
    { path:"FormElement/TextBox", component:<Page content={<TextBoxPage />} /> },
    { path:"FormElement/TextArea", component:<Page content={<TextAreaPage />} /> },
    { path:"FormElement/ColorPicker", component:<Page content={<ColorPickerPage />} /> },
    { path:"FormElement/Choice", component:<Page content={<ChoicePage />} /> },
    { path:"FormElement/DateTimePicker", component:<Page content={<DateTimePickerPage />} /> },
    { path:"FormElement/Range", component:<Page content={<RangePage />} /> },
    { path:"FormElement/InputGroup", component:<Page content={<InputGroupPage />} /> },

    { path:"Visualization/AreaChart", component:<Page content={<AreaChartPage />} /> },
    { path:"Visualization/BarChart", component:<Page content={<BarChartPage />} /> },
    { path:"Visualization/BoxChart", component:<Page content={<BoxChartPage />} /> },
    { path:"Visualization/CompositionChart", component:<Page content={<CompositionChartPage />} /> },
    { path:"Visualization/CorrelationChart", component:<Page content={<CorrelationChartPage />} /> },
    { path:"Visualization/DendogramChart", component:<Page content={<DendogramChartPage />} /> },
    { path:"Visualization/FunnelChart", component:<Page content={<FunnelChartPage />} /> },
    { path:"Visualization/LineChart", component:<Page content={<LineChartPage />} /> },
    { path:"Visualization/PieChart", component:<Page content={<PieChartPage />} /> },
    { path:"Visualization/SankeyChart", component:<Page content={<SankeyChartPage />} /> },
    { path:"Visualization/ScatterChart", component:<Page content={<ScatterChartPage />} /> },
    { path:"Visualization/TreeMapChart", component:<Page content={<TreeMapChartPage />} /> },
    { path:"Visualization/TwoByTwoChart", component:<Page content={<TwoByTwoChartPage />} /> },
    { path:"Visualization/VennChart", component:<Page content={<VennChartPage />} /> },
    { path:"Visualization/WaterfallChart", component:<Page content={<WaterfallChartPage />} /> },

    { path:"Themes/AppColors", component:<Page content={<AppColorsPage />} /> },

    { path:"CodeEditorsViewers/Highlight", component:<Page content={<HighlightPage />} /> },

    { path:"AdvancedTopics/Redux", component:<Page content={<ReduxPage />} /> },

    { path:"ReadyMadeScreen/Authentication", component:<Page content={<AuthenticationPage />} /> },
    { path:"ReadyMadeScreen/ReadyMadeDropdowns", component:<Page content={<ReadyMadeDropdownsPage />} /> }
];