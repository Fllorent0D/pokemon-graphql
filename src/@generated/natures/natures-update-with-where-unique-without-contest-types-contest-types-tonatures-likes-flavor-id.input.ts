import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { naturesWhereUniqueInput } from './natures-where-unique.input';
import { Type } from 'class-transformer';
import { naturesUpdateWithoutContest_types_contest_typesTonatures_likes_flavor_idInput } from './natures-update-without-contest-types-contest-types-tonatures-likes-flavor-id.input';

@InputType()
export class naturesUpdateWithWhereUniqueWithoutContest_types_contest_typesTonatures_likes_flavor_idInput {

    @Field(() => naturesWhereUniqueInput, {nullable:false})
    @Type(() => naturesWhereUniqueInput)
    where!: naturesWhereUniqueInput;

    @Field(() => naturesUpdateWithoutContest_types_contest_typesTonatures_likes_flavor_idInput, {nullable:false})
    @Type(() => naturesUpdateWithoutContest_types_contest_typesTonatures_likes_flavor_idInput)
    data!: naturesUpdateWithoutContest_types_contest_typesTonatures_likes_flavor_idInput;
}
