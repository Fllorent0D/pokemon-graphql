import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { encounter_method_proseWhereUniqueInput } from '../encounter-method-prose/encounter-method-prose-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteOneencounterMethodProseArgs {

    @Field(() => encounter_method_proseWhereUniqueInput, {nullable:false})
    @Type(() => encounter_method_proseWhereUniqueInput)
    where!: encounter_method_proseWhereUniqueInput;
}
