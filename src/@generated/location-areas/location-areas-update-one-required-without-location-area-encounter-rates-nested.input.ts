import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { location_areasCreateWithoutLocation_area_encounter_ratesInput } from './location-areas-create-without-location-area-encounter-rates.input';
import { Type } from 'class-transformer';
import { location_areasCreateOrConnectWithoutLocation_area_encounter_ratesInput } from './location-areas-create-or-connect-without-location-area-encounter-rates.input';
import { location_areasUpsertWithoutLocation_area_encounter_ratesInput } from './location-areas-upsert-without-location-area-encounter-rates.input';
import { location_areasWhereUniqueInput } from './location-areas-where-unique.input';
import { location_areasUpdateWithoutLocation_area_encounter_ratesInput } from './location-areas-update-without-location-area-encounter-rates.input';

@InputType()
export class location_areasUpdateOneRequiredWithoutLocation_area_encounter_ratesNestedInput {

    @Field(() => location_areasCreateWithoutLocation_area_encounter_ratesInput, {nullable:true})
    @Type(() => location_areasCreateWithoutLocation_area_encounter_ratesInput)
    create?: location_areasCreateWithoutLocation_area_encounter_ratesInput;

    @Field(() => location_areasCreateOrConnectWithoutLocation_area_encounter_ratesInput, {nullable:true})
    @Type(() => location_areasCreateOrConnectWithoutLocation_area_encounter_ratesInput)
    connectOrCreate?: location_areasCreateOrConnectWithoutLocation_area_encounter_ratesInput;

    @Field(() => location_areasUpsertWithoutLocation_area_encounter_ratesInput, {nullable:true})
    @Type(() => location_areasUpsertWithoutLocation_area_encounter_ratesInput)
    upsert?: location_areasUpsertWithoutLocation_area_encounter_ratesInput;

    @Field(() => location_areasWhereUniqueInput, {nullable:true})
    @Type(() => location_areasWhereUniqueInput)
    connect?: location_areasWhereUniqueInput;

    @Field(() => location_areasUpdateWithoutLocation_area_encounter_ratesInput, {nullable:true})
    @Type(() => location_areasUpdateWithoutLocation_area_encounter_ratesInput)
    update?: location_areasUpdateWithoutLocation_area_encounter_ratesInput;
}
