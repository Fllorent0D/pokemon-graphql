import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { stat_namesCreateInput } from '../stat-names/stat-names-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOnestatNamesArgs {

    @Field(() => stat_namesCreateInput, {nullable:false})
    @Type(() => stat_namesCreateInput)
    data!: stat_namesCreateInput;
}
