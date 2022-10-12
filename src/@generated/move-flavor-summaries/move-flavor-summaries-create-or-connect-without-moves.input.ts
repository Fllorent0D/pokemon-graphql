import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { move_flavor_summariesWhereUniqueInput } from './move-flavor-summaries-where-unique.input';
import { Type } from 'class-transformer';
import { move_flavor_summariesCreateWithoutMovesInput } from './move-flavor-summaries-create-without-moves.input';

@InputType()
export class move_flavor_summariesCreateOrConnectWithoutMovesInput {

    @Field(() => move_flavor_summariesWhereUniqueInput, {nullable:false})
    @Type(() => move_flavor_summariesWhereUniqueInput)
    where!: move_flavor_summariesWhereUniqueInput;

    @Field(() => move_flavor_summariesCreateWithoutMovesInput, {nullable:false})
    @Type(() => move_flavor_summariesCreateWithoutMovesInput)
    create!: move_flavor_summariesCreateWithoutMovesInput;
}
