import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { stat_hint_namesCreateInput } from '../stat-hint-names/stat-hint-names-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOnestatHintNamesArgs {

    @Field(() => stat_hint_namesCreateInput, {nullable:false})
    @Type(() => stat_hint_namesCreateInput)
    data!: stat_hint_namesCreateInput;
}
