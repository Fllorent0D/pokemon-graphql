import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { encounter_method_proseCreateInput } from '../encounter-method-prose/encounter-method-prose-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneencounterMethodProseArgs {

    @Field(() => encounter_method_proseCreateInput, {nullable:false})
    @Type(() => encounter_method_proseCreateInput)
    data!: encounter_method_proseCreateInput;
}
