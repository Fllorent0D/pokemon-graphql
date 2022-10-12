import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { encounter_methodsCreateWithoutLocation_area_encounter_ratesInput } from './encounter-methods-create-without-location-area-encounter-rates.input';
import { Type } from 'class-transformer';
import { encounter_methodsCreateOrConnectWithoutLocation_area_encounter_ratesInput } from './encounter-methods-create-or-connect-without-location-area-encounter-rates.input';
import { encounter_methodsWhereUniqueInput } from './encounter-methods-where-unique.input';

@InputType()
export class encounter_methodsCreateNestedOneWithoutLocation_area_encounter_ratesInput {

    @Field(() => encounter_methodsCreateWithoutLocation_area_encounter_ratesInput, {nullable:true})
    @Type(() => encounter_methodsCreateWithoutLocation_area_encounter_ratesInput)
    create?: encounter_methodsCreateWithoutLocation_area_encounter_ratesInput;

    @Field(() => encounter_methodsCreateOrConnectWithoutLocation_area_encounter_ratesInput, {nullable:true})
    @Type(() => encounter_methodsCreateOrConnectWithoutLocation_area_encounter_ratesInput)
    connectOrCreate?: encounter_methodsCreateOrConnectWithoutLocation_area_encounter_ratesInput;

    @Field(() => encounter_methodsWhereUniqueInput, {nullable:true})
    @Type(() => encounter_methodsWhereUniqueInput)
    connect?: encounter_methodsWhereUniqueInput;
}
