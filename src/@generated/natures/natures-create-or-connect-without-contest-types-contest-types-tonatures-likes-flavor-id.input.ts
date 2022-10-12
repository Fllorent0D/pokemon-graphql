import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { naturesWhereUniqueInput } from './natures-where-unique.input';
import { Type } from 'class-transformer';
import { naturesCreateWithoutContest_types_contest_typesTonatures_likes_flavor_idInput } from './natures-create-without-contest-types-contest-types-tonatures-likes-flavor-id.input';

@InputType()
export class naturesCreateOrConnectWithoutContest_types_contest_typesTonatures_likes_flavor_idInput {

    @Field(() => naturesWhereUniqueInput, {nullable:false})
    @Type(() => naturesWhereUniqueInput)
    where!: naturesWhereUniqueInput;

    @Field(() => naturesCreateWithoutContest_types_contest_typesTonatures_likes_flavor_idInput, {nullable:false})
    @Type(() => naturesCreateWithoutContest_types_contest_typesTonatures_likes_flavor_idInput)
    create!: naturesCreateWithoutContest_types_contest_typesTonatures_likes_flavor_idInput;
}
