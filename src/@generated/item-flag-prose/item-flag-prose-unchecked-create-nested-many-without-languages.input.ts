import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { item_flag_proseCreateWithoutLanguagesInput } from './item-flag-prose-create-without-languages.input';
import { Type } from 'class-transformer';
import { item_flag_proseCreateOrConnectWithoutLanguagesInput } from './item-flag-prose-create-or-connect-without-languages.input';
import { item_flag_proseWhereUniqueInput } from './item-flag-prose-where-unique.input';

@InputType()
export class item_flag_proseUncheckedCreateNestedManyWithoutLanguagesInput {

    @Field(() => [item_flag_proseCreateWithoutLanguagesInput], {nullable:true})
    @Type(() => item_flag_proseCreateWithoutLanguagesInput)
    create?: Array<item_flag_proseCreateWithoutLanguagesInput>;

    @Field(() => [item_flag_proseCreateOrConnectWithoutLanguagesInput], {nullable:true})
    @Type(() => item_flag_proseCreateOrConnectWithoutLanguagesInput)
    connectOrCreate?: Array<item_flag_proseCreateOrConnectWithoutLanguagesInput>;

    @Field(() => [item_flag_proseWhereUniqueInput], {nullable:true})
    @Type(() => item_flag_proseWhereUniqueInput)
    connect?: Array<item_flag_proseWhereUniqueInput>;
}
