import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { move_flag_mapCreateInput } from '../move-flag-map/move-flag-map-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOnemoveFlagMapArgs {

    @Field(() => move_flag_mapCreateInput, {nullable:false})
    @Type(() => move_flag_mapCreateInput)
    data!: move_flag_mapCreateInput;
}
