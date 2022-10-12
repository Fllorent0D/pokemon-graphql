import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { move_flagsUpdateWithoutMove_flag_mapInput } from './move-flags-update-without-move-flag-map.input';
import { Type } from 'class-transformer';
import { move_flagsCreateWithoutMove_flag_mapInput } from './move-flags-create-without-move-flag-map.input';

@InputType()
export class move_flagsUpsertWithoutMove_flag_mapInput {

    @Field(() => move_flagsUpdateWithoutMove_flag_mapInput, {nullable:false})
    @Type(() => move_flagsUpdateWithoutMove_flag_mapInput)
    update!: move_flagsUpdateWithoutMove_flag_mapInput;

    @Field(() => move_flagsCreateWithoutMove_flag_mapInput, {nullable:false})
    @Type(() => move_flagsCreateWithoutMove_flag_mapInput)
    create!: move_flagsCreateWithoutMove_flag_mapInput;
}
