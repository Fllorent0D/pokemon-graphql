import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { move_changelogWhereInput } from '../move-changelog/move-changelog-where.input';

@InputType()
export class Move_changelogListRelationFilter {

    @Field(() => move_changelogWhereInput, {nullable:true})
    every?: move_changelogWhereInput;

    @Field(() => move_changelogWhereInput, {nullable:true})
    some?: move_changelogWhereInput;

    @Field(() => move_changelogWhereInput, {nullable:true})
    none?: move_changelogWhereInput;
}
