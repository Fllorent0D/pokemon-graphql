import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ability_changelogWhereInput } from '../ability-changelog/ability-changelog-where.input';

@InputType()
export class Ability_changelogRelationFilter {

    @Field(() => ability_changelogWhereInput, {nullable:true})
    is?: ability_changelogWhereInput;

    @Field(() => ability_changelogWhereInput, {nullable:true})
    isNot?: ability_changelogWhereInput;
}
