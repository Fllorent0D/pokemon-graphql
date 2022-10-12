import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { encounter_methodsWhereUniqueInput } from '../encounter-methods/encounter-methods-where-unique.input';
import { Type } from 'class-transformer';
import { encounter_methodsCreateInput } from '../encounter-methods/encounter-methods-create.input';
import { encounter_methodsUpdateInput } from '../encounter-methods/encounter-methods-update.input';

@ArgsType()
export class UpsertOneencounterMethodsArgs {

    @Field(() => encounter_methodsWhereUniqueInput, {nullable:false})
    @Type(() => encounter_methodsWhereUniqueInput)
    where!: encounter_methodsWhereUniqueInput;

    @Field(() => encounter_methodsCreateInput, {nullable:false})
    @Type(() => encounter_methodsCreateInput)
    create!: encounter_methodsCreateInput;

    @Field(() => encounter_methodsUpdateInput, {nullable:false})
    @Type(() => encounter_methodsUpdateInput)
    update!: encounter_methodsUpdateInput;
}
