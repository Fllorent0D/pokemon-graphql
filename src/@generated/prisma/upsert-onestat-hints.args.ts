import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { stat_hintsWhereUniqueInput } from '../stat-hints/stat-hints-where-unique.input';
import { Type } from 'class-transformer';
import { stat_hintsCreateInput } from '../stat-hints/stat-hints-create.input';
import { stat_hintsUpdateInput } from '../stat-hints/stat-hints-update.input';

@ArgsType()
export class UpsertOnestatHintsArgs {

    @Field(() => stat_hintsWhereUniqueInput, {nullable:false})
    @Type(() => stat_hintsWhereUniqueInput)
    where!: stat_hintsWhereUniqueInput;

    @Field(() => stat_hintsCreateInput, {nullable:false})
    @Type(() => stat_hintsCreateInput)
    create!: stat_hintsCreateInput;

    @Field(() => stat_hintsUpdateInput, {nullable:false})
    @Type(() => stat_hintsUpdateInput)
    update!: stat_hintsUpdateInput;
}
