import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { move_flag_mapWhereInput } from '../move-flag-map/move-flag-map-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManymoveFlagMapArgs {

    @Field(() => move_flag_mapWhereInput, {nullable:true})
    @Type(() => move_flag_mapWhereInput)
    where?: move_flag_mapWhereInput;
}
