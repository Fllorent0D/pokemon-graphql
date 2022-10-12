import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { item_proseCreateWithoutLanguagesInput } from './item-prose-create-without-languages.input';
import { Type } from 'class-transformer';
import { item_proseCreateOrConnectWithoutLanguagesInput } from './item-prose-create-or-connect-without-languages.input';
import { item_proseWhereUniqueInput } from './item-prose-where-unique.input';

@InputType()
export class item_proseUncheckedCreateNestedManyWithoutLanguagesInput {

    @Field(() => [item_proseCreateWithoutLanguagesInput], {nullable:true})
    @Type(() => item_proseCreateWithoutLanguagesInput)
    create?: Array<item_proseCreateWithoutLanguagesInput>;

    @Field(() => [item_proseCreateOrConnectWithoutLanguagesInput], {nullable:true})
    @Type(() => item_proseCreateOrConnectWithoutLanguagesInput)
    connectOrCreate?: Array<item_proseCreateOrConnectWithoutLanguagesInput>;

    @Field(() => [item_proseWhereUniqueInput], {nullable:true})
    @Type(() => item_proseWhereUniqueInput)
    connect?: Array<item_proseWhereUniqueInput>;
}
