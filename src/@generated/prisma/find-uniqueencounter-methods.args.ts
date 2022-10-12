import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { encounter_methodsWhereUniqueInput } from '../encounter-methods/encounter-methods-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniqueencounterMethodsArgs {

    @Field(() => encounter_methodsWhereUniqueInput, {nullable:false})
    @Type(() => encounter_methodsWhereUniqueInput)
    where!: encounter_methodsWhereUniqueInput;
}
