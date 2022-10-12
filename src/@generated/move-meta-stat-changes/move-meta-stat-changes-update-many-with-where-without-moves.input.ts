import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { move_meta_stat_changesScalarWhereInput } from './move-meta-stat-changes-scalar-where.input';
import { Type } from 'class-transformer';
import { move_meta_stat_changesUpdateManyMutationInput } from './move-meta-stat-changes-update-many-mutation.input';

@InputType()
export class move_meta_stat_changesUpdateManyWithWhereWithoutMovesInput {

    @Field(() => move_meta_stat_changesScalarWhereInput, {nullable:false})
    @Type(() => move_meta_stat_changesScalarWhereInput)
    where!: move_meta_stat_changesScalarWhereInput;

    @Field(() => move_meta_stat_changesUpdateManyMutationInput, {nullable:false})
    @Type(() => move_meta_stat_changesUpdateManyMutationInput)
    data!: move_meta_stat_changesUpdateManyMutationInput;
}
