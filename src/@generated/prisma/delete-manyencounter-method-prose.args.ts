import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { encounter_method_proseWhereInput } from '../encounter-method-prose/encounter-method-prose-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyencounterMethodProseArgs {

    @Field(() => encounter_method_proseWhereInput, {nullable:true})
    @Type(() => encounter_method_proseWhereInput)
    where?: encounter_method_proseWhereInput;
}
