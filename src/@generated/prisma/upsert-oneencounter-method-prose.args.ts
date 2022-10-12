import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { encounter_method_proseWhereUniqueInput } from '../encounter-method-prose/encounter-method-prose-where-unique.input';
import { Type } from 'class-transformer';
import { encounter_method_proseCreateInput } from '../encounter-method-prose/encounter-method-prose-create.input';
import { encounter_method_proseUpdateInput } from '../encounter-method-prose/encounter-method-prose-update.input';

@ArgsType()
export class UpsertOneencounterMethodProseArgs {

    @Field(() => encounter_method_proseWhereUniqueInput, {nullable:false})
    @Type(() => encounter_method_proseWhereUniqueInput)
    where!: encounter_method_proseWhereUniqueInput;

    @Field(() => encounter_method_proseCreateInput, {nullable:false})
    @Type(() => encounter_method_proseCreateInput)
    create!: encounter_method_proseCreateInput;

    @Field(() => encounter_method_proseUpdateInput, {nullable:false})
    @Type(() => encounter_method_proseUpdateInput)
    update!: encounter_method_proseUpdateInput;
}
