import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { encounter_method_proseUpdateManyMutationInput } from '../encounter-method-prose/encounter-method-prose-update-many-mutation.input';
import { Type } from 'class-transformer';
import { encounter_method_proseWhereInput } from '../encounter-method-prose/encounter-method-prose-where.input';

@ArgsType()
export class UpdateManyencounterMethodProseArgs {

    @Field(() => encounter_method_proseUpdateManyMutationInput, {nullable:false})
    @Type(() => encounter_method_proseUpdateManyMutationInput)
    data!: encounter_method_proseUpdateManyMutationInput;

    @Field(() => encounter_method_proseWhereInput, {nullable:true})
    @Type(() => encounter_method_proseWhereInput)
    where?: encounter_method_proseWhereInput;
}
