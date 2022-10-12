import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { move_flavor_textWhereUniqueInput } from './move-flavor-text-where-unique.input';
import { Type } from 'class-transformer';
import { move_flavor_textUpdateWithoutMovesInput } from './move-flavor-text-update-without-moves.input';

@InputType()
export class move_flavor_textUpdateWithWhereUniqueWithoutMovesInput {

    @Field(() => move_flavor_textWhereUniqueInput, {nullable:false})
    @Type(() => move_flavor_textWhereUniqueInput)
    where!: move_flavor_textWhereUniqueInput;

    @Field(() => move_flavor_textUpdateWithoutMovesInput, {nullable:false})
    @Type(() => move_flavor_textUpdateWithoutMovesInput)
    data!: move_flavor_textUpdateWithoutMovesInput;
}
