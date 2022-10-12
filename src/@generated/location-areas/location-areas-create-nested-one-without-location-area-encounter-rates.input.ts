import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { location_areasCreateWithoutLocation_area_encounter_ratesInput } from './location-areas-create-without-location-area-encounter-rates.input';
import { Type } from 'class-transformer';
import { location_areasCreateOrConnectWithoutLocation_area_encounter_ratesInput } from './location-areas-create-or-connect-without-location-area-encounter-rates.input';
import { location_areasWhereUniqueInput } from './location-areas-where-unique.input';

@InputType()
export class location_areasCreateNestedOneWithoutLocation_area_encounter_ratesInput {

    @Field(() => location_areasCreateWithoutLocation_area_encounter_ratesInput, {nullable:true})
    @Type(() => location_areasCreateWithoutLocation_area_encounter_ratesInput)
    create?: location_areasCreateWithoutLocation_area_encounter_ratesInput;

    @Field(() => location_areasCreateOrConnectWithoutLocation_area_encounter_ratesInput, {nullable:true})
    @Type(() => location_areasCreateOrConnectWithoutLocation_area_encounter_ratesInput)
    connectOrCreate?: location_areasCreateOrConnectWithoutLocation_area_encounter_ratesInput;

    @Field(() => location_areasWhereUniqueInput, {nullable:true})
    @Type(() => location_areasWhereUniqueInput)
    connect?: location_areasWhereUniqueInput;
}
