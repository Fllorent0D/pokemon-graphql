import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { move_flag_mapScalarWhereInput } from './move-flag-map-scalar-where.input';
import { Type } from 'class-transformer';
import { move_flag_mapUncheckedUpdateManyWithoutMove_flag_mapInput } from './move-flag-map-unchecked-update-many-without-move-flag-map.input';

@InputType()
export class move_flag_mapUpdateManyWithWhereWithoutMove_flagsInput {

    @Field(() => move_flag_mapScalarWhereInput, {nullable:false})
    @Type(() => move_flag_mapScalarWhereInput)
    where!: move_flag_mapScalarWhereInput;

    @Field(() => move_flag_mapUncheckedUpdateManyWithoutMove_flag_mapInput, {nullable:false})
    @Type(() => move_flag_mapUncheckedUpdateManyWithoutMove_flag_mapInput)
    data!: move_flag_mapUncheckedUpdateManyWithoutMove_flag_mapInput;
}
