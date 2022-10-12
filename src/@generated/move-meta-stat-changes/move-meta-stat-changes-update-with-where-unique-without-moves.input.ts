import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { move_meta_stat_changesWhereUniqueInput } from './move-meta-stat-changes-where-unique.input';
import { Type } from 'class-transformer';
import { move_meta_stat_changesUpdateWithoutMovesInput } from './move-meta-stat-changes-update-without-moves.input';

@InputType()
export class move_meta_stat_changesUpdateWithWhereUniqueWithoutMovesInput {

    @Field(() => move_meta_stat_changesWhereUniqueInput, {nullable:false})
    @Type(() => move_meta_stat_changesWhereUniqueInput)
    where!: move_meta_stat_changesWhereUniqueInput;

    @Field(() => move_meta_stat_changesUpdateWithoutMovesInput, {nullable:false})
    @Type(() => move_meta_stat_changesUpdateWithoutMovesInput)
    data!: move_meta_stat_changesUpdateWithoutMovesInput;
}
