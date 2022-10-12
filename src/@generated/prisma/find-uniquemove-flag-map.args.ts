import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { move_flag_mapWhereUniqueInput } from '../move-flag-map/move-flag-map-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniquemoveFlagMapArgs {

    @Field(() => move_flag_mapWhereUniqueInput, {nullable:false})
    @Type(() => move_flag_mapWhereUniqueInput)
    where!: move_flag_mapWhereUniqueInput;
}
