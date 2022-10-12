import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { stat_namesWhereInput } from '../stat-names/stat-names-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManystatNamesArgs {

    @Field(() => stat_namesWhereInput, {nullable:true})
    @Type(() => stat_namesWhereInput)
    where?: stat_namesWhereInput;
}
