import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { stat_hintsWhereUniqueInput } from '../stat-hints/stat-hints-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniquestatHintsArgs {

    @Field(() => stat_hintsWhereUniqueInput, {nullable:false})
    @Type(() => stat_hintsWhereUniqueInput)
    where!: stat_hintsWhereUniqueInput;
}
