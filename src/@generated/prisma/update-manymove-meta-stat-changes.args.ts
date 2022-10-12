import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { move_meta_stat_changesUpdateManyMutationInput } from '../move-meta-stat-changes/move-meta-stat-changes-update-many-mutation.input';
import { Type } from 'class-transformer';
import { move_meta_stat_changesWhereInput } from '../move-meta-stat-changes/move-meta-stat-changes-where.input';

@ArgsType()
export class UpdateManymoveMetaStatChangesArgs {

    @Field(() => move_meta_stat_changesUpdateManyMutationInput, {nullable:false})
    @Type(() => move_meta_stat_changesUpdateManyMutationInput)
    data!: move_meta_stat_changesUpdateManyMutationInput;

    @Field(() => move_meta_stat_changesWhereInput, {nullable:true})
    @Type(() => move_meta_stat_changesWhereInput)
    where?: move_meta_stat_changesWhereInput;
}
