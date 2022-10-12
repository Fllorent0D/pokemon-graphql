import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { stat_hintsUpdateManyMutationInput } from '../stat-hints/stat-hints-update-many-mutation.input';
import { Type } from 'class-transformer';
import { stat_hintsWhereInput } from '../stat-hints/stat-hints-where.input';

@ArgsType()
export class UpdateManystatHintsArgs {

    @Field(() => stat_hintsUpdateManyMutationInput, {nullable:false})
    @Type(() => stat_hintsUpdateManyMutationInput)
    data!: stat_hintsUpdateManyMutationInput;

    @Field(() => stat_hintsWhereInput, {nullable:true})
    @Type(() => stat_hintsWhereInput)
    where?: stat_hintsWhereInput;
}
