import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { stat_hintsUpdateInput } from '../stat-hints/stat-hints-update.input';
import { Type } from 'class-transformer';
import { stat_hintsWhereUniqueInput } from '../stat-hints/stat-hints-where-unique.input';

@ArgsType()
export class UpdateOnestatHintsArgs {

    @Field(() => stat_hintsUpdateInput, {nullable:false})
    @Type(() => stat_hintsUpdateInput)
    data!: stat_hintsUpdateInput;

    @Field(() => stat_hintsWhereUniqueInput, {nullable:false})
    @Type(() => stat_hintsWhereUniqueInput)
    where!: stat_hintsWhereUniqueInput;
}
