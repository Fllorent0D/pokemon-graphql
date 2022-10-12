import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { contest_combosWhereInput } from '../contest-combos/contest-combos-where.input';

@InputType()
export class Contest_combosListRelationFilter {

    @Field(() => contest_combosWhereInput, {nullable:true})
    every?: contest_combosWhereInput;

    @Field(() => contest_combosWhereInput, {nullable:true})
    some?: contest_combosWhereInput;

    @Field(() => contest_combosWhereInput, {nullable:true})
    none?: contest_combosWhereInput;
}
