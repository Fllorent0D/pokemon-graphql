import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { move_flavor_summariesCreateWithoutLanguagesInput } from './move-flavor-summaries-create-without-languages.input';
import { Type } from 'class-transformer';
import { move_flavor_summariesCreateOrConnectWithoutLanguagesInput } from './move-flavor-summaries-create-or-connect-without-languages.input';
import { move_flavor_summariesWhereUniqueInput } from './move-flavor-summaries-where-unique.input';

@InputType()
export class move_flavor_summariesUncheckedCreateNestedManyWithoutLanguagesInput {

    @Field(() => [move_flavor_summariesCreateWithoutLanguagesInput], {nullable:true})
    @Type(() => move_flavor_summariesCreateWithoutLanguagesInput)
    create?: Array<move_flavor_summariesCreateWithoutLanguagesInput>;

    @Field(() => [move_flavor_summariesCreateOrConnectWithoutLanguagesInput], {nullable:true})
    @Type(() => move_flavor_summariesCreateOrConnectWithoutLanguagesInput)
    connectOrCreate?: Array<move_flavor_summariesCreateOrConnectWithoutLanguagesInput>;

    @Field(() => [move_flavor_summariesWhereUniqueInput], {nullable:true})
    @Type(() => move_flavor_summariesWhereUniqueInput)
    connect?: Array<move_flavor_summariesWhereUniqueInput>;
}
