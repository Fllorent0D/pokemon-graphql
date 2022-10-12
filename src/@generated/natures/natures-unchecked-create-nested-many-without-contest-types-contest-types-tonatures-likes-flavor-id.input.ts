import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { naturesCreateWithoutContest_types_contest_typesTonatures_likes_flavor_idInput } from './natures-create-without-contest-types-contest-types-tonatures-likes-flavor-id.input';
import { Type } from 'class-transformer';
import { naturesCreateOrConnectWithoutContest_types_contest_typesTonatures_likes_flavor_idInput } from './natures-create-or-connect-without-contest-types-contest-types-tonatures-likes-flavor-id.input';
import { naturesWhereUniqueInput } from './natures-where-unique.input';

@InputType()
export class naturesUncheckedCreateNestedManyWithoutContest_types_contest_typesTonatures_likes_flavor_idInput {

    @Field(() => [naturesCreateWithoutContest_types_contest_typesTonatures_likes_flavor_idInput], {nullable:true})
    @Type(() => naturesCreateWithoutContest_types_contest_typesTonatures_likes_flavor_idInput)
    create?: Array<naturesCreateWithoutContest_types_contest_typesTonatures_likes_flavor_idInput>;

    @Field(() => [naturesCreateOrConnectWithoutContest_types_contest_typesTonatures_likes_flavor_idInput], {nullable:true})
    @Type(() => naturesCreateOrConnectWithoutContest_types_contest_typesTonatures_likes_flavor_idInput)
    connectOrCreate?: Array<naturesCreateOrConnectWithoutContest_types_contest_typesTonatures_likes_flavor_idInput>;

    @Field(() => [naturesWhereUniqueInput], {nullable:true})
    @Type(() => naturesWhereUniqueInput)
    connect?: Array<naturesWhereUniqueInput>;
}
