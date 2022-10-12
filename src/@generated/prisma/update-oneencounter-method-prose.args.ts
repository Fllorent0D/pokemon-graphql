import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { encounter_method_proseUpdateInput } from '../encounter-method-prose/encounter-method-prose-update.input';
import { Type } from 'class-transformer';
import { encounter_method_proseWhereUniqueInput } from '../encounter-method-prose/encounter-method-prose-where-unique.input';

@ArgsType()
export class UpdateOneencounterMethodProseArgs {

    @Field(() => encounter_method_proseUpdateInput, {nullable:false})
    @Type(() => encounter_method_proseUpdateInput)
    data!: encounter_method_proseUpdateInput;

    @Field(() => encounter_method_proseWhereUniqueInput, {nullable:false})
    @Type(() => encounter_method_proseWhereUniqueInput)
    where!: encounter_method_proseWhereUniqueInput;
}
