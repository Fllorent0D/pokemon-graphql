import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { move_flag_mapWhereUniqueInput } from '../move-flag-map/move-flag-map-where-unique.input';
import { Type } from 'class-transformer';
import { move_flag_mapCreateInput } from '../move-flag-map/move-flag-map-create.input';
import { move_flag_mapUpdateInput } from '../move-flag-map/move-flag-map-update.input';

@ArgsType()
export class UpsertOnemoveFlagMapArgs {

    @Field(() => move_flag_mapWhereUniqueInput, {nullable:false})
    @Type(() => move_flag_mapWhereUniqueInput)
    where!: move_flag_mapWhereUniqueInput;

    @Field(() => move_flag_mapCreateInput, {nullable:false})
    @Type(() => move_flag_mapCreateInput)
    create!: move_flag_mapCreateInput;

    @Field(() => move_flag_mapUpdateInput, {nullable:false})
    @Type(() => move_flag_mapUpdateInput)
    update!: move_flag_mapUpdateInput;
}
