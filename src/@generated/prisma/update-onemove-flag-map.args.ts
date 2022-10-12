import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { move_flag_mapUpdateInput } from '../move-flag-map/move-flag-map-update.input';
import { Type } from 'class-transformer';
import { move_flag_mapWhereUniqueInput } from '../move-flag-map/move-flag-map-where-unique.input';

@ArgsType()
export class UpdateOnemoveFlagMapArgs {

    @Field(() => move_flag_mapUpdateInput, {nullable:false})
    @Type(() => move_flag_mapUpdateInput)
    data!: move_flag_mapUpdateInput;

    @Field(() => move_flag_mapWhereUniqueInput, {nullable:false})
    @Type(() => move_flag_mapWhereUniqueInput)
    where!: move_flag_mapWhereUniqueInput;
}
