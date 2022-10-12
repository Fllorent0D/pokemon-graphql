import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { encounter_methodsWhereUniqueInput } from './encounter-methods-where-unique.input';
import { Type } from 'class-transformer';
import { encounter_methodsCreateWithoutLocation_area_encounter_ratesInput } from './encounter-methods-create-without-location-area-encounter-rates.input';

@InputType()
export class encounter_methodsCreateOrConnectWithoutLocation_area_encounter_ratesInput {

    @Field(() => encounter_methodsWhereUniqueInput, {nullable:false})
    @Type(() => encounter_methodsWhereUniqueInput)
    where!: encounter_methodsWhereUniqueInput;

    @Field(() => encounter_methodsCreateWithoutLocation_area_encounter_ratesInput, {nullable:false})
    @Type(() => encounter_methodsCreateWithoutLocation_area_encounter_ratesInput)
    create!: encounter_methodsCreateWithoutLocation_area_encounter_ratesInput;
}
