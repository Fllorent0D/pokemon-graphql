import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ability_changelogWhereInput } from '../ability-changelog/ability-changelog-where.input';
import { Type } from 'class-transformer';
import { ability_changelogOrderByWithRelationInput } from '../ability-changelog/ability-changelog-order-by-with-relation.input';
import { ability_changelogWhereUniqueInput } from '../ability-changelog/ability-changelog-where-unique.input';
import { Int } from '@nestjs/graphql';
import { Ability_changelogScalarFieldEnum } from './ability-changelog-scalar-field.enum';

@ArgsType()
export class FindManyabilityChangelogArgs {

    @Field(() => ability_changelogWhereInput, {nullable:true})
    @Type(() => ability_changelogWhereInput)
    where?: ability_changelogWhereInput;

    @Field(() => [ability_changelogOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<ability_changelogOrderByWithRelationInput>;

    @Field(() => ability_changelogWhereUniqueInput, {nullable:true})
    cursor?: ability_changelogWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [Ability_changelogScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof Ability_changelogScalarFieldEnum>;
}
