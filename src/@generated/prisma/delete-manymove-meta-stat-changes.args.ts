import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { move_meta_stat_changesWhereInput } from '../move-meta-stat-changes/move-meta-stat-changes-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManymoveMetaStatChangesArgs {

    @Field(() => move_meta_stat_changesWhereInput, {nullable:true})
    @Type(() => move_meta_stat_changesWhereInput)
    where?: move_meta_stat_changesWhereInput;
}
