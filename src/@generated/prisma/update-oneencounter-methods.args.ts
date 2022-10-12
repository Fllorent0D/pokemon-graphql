import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { encounter_methodsUpdateInput } from '../encounter-methods/encounter-methods-update.input';
import { Type } from 'class-transformer';
import { encounter_methodsWhereUniqueInput } from '../encounter-methods/encounter-methods-where-unique.input';

@ArgsType()
export class UpdateOneencounterMethodsArgs {

    @Field(() => encounter_methodsUpdateInput, {nullable:false})
    @Type(() => encounter_methodsUpdateInput)
    data!: encounter_methodsUpdateInput;

    @Field(() => encounter_methodsWhereUniqueInput, {nullable:false})
    @Type(() => encounter_methodsWhereUniqueInput)
    where!: encounter_methodsWhereUniqueInput;
}
