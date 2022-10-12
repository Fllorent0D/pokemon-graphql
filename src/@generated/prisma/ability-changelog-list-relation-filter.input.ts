import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ability_changelogWhereInput } from '../ability-changelog/ability-changelog-where.input';

@InputType()
export class Ability_changelogListRelationFilter {

    @Field(() => ability_changelogWhereInput, {nullable:true})
    every?: ability_changelogWhereInput;

    @Field(() => ability_changelogWhereInput, {nullable:true})
    some?: ability_changelogWhereInput;

    @Field(() => ability_changelogWhereInput, {nullable:true})
    none?: ability_changelogWhereInput;
}
