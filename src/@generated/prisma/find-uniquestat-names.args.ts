import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { stat_namesWhereUniqueInput } from '../stat-names/stat-names-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniquestatNamesArgs {

    @Field(() => stat_namesWhereUniqueInput, {nullable:false})
    @Type(() => stat_namesWhereUniqueInput)
    where!: stat_namesWhereUniqueInput;
}
