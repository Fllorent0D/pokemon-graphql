import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { item_flavor_summariesCreateWithoutLanguagesInput } from './item-flavor-summaries-create-without-languages.input';
import { Type } from 'class-transformer';
import { item_flavor_summariesCreateOrConnectWithoutLanguagesInput } from './item-flavor-summaries-create-or-connect-without-languages.input';
import { item_flavor_summariesWhereUniqueInput } from './item-flavor-summaries-where-unique.input';

@InputType()
export class item_flavor_summariesUncheckedCreateNestedManyWithoutLanguagesInput {

    @Field(() => [item_flavor_summariesCreateWithoutLanguagesInput], {nullable:true})
    @Type(() => item_flavor_summariesCreateWithoutLanguagesInput)
    create?: Array<item_flavor_summariesCreateWithoutLanguagesInput>;

    @Field(() => [item_flavor_summariesCreateOrConnectWithoutLanguagesInput], {nullable:true})
    @Type(() => item_flavor_summariesCreateOrConnectWithoutLanguagesInput)
    connectOrCreate?: Array<item_flavor_summariesCreateOrConnectWithoutLanguagesInput>;

    @Field(() => [item_flavor_summariesWhereUniqueInput], {nullable:true})
    @Type(() => item_flavor_summariesWhereUniqueInput)
    connect?: Array<item_flavor_summariesWhereUniqueInput>;
}
