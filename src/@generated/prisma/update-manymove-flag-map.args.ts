import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { move_flag_mapUncheckedUpdateManyInput } from '../move-flag-map/move-flag-map-unchecked-update-many.input';
import { Type } from 'class-transformer';
import { move_flag_mapWhereInput } from '../move-flag-map/move-flag-map-where.input';

@ArgsType()
export class UpdateManymoveFlagMapArgs {

    @Field(() => move_flag_mapUncheckedUpdateManyInput, {nullable:false})
    @Type(() => move_flag_mapUncheckedUpdateManyInput)
    data!: move_flag_mapUncheckedUpdateManyInput;

    @Field(() => move_flag_mapWhereInput, {nullable:true})
    @Type(() => move_flag_mapWhereInput)
    where?: move_flag_mapWhereInput;
}
