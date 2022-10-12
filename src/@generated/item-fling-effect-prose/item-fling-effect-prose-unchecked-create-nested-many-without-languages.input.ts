import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { item_fling_effect_proseCreateWithoutLanguagesInput } from './item-fling-effect-prose-create-without-languages.input';
import { Type } from 'class-transformer';
import { item_fling_effect_proseCreateOrConnectWithoutLanguagesInput } from './item-fling-effect-prose-create-or-connect-without-languages.input';
import { item_fling_effect_proseWhereUniqueInput } from './item-fling-effect-prose-where-unique.input';

@InputType()
export class item_fling_effect_proseUncheckedCreateNestedManyWithoutLanguagesInput {

    @Field(() => [item_fling_effect_proseCreateWithoutLanguagesInput], {nullable:true})
    @Type(() => item_fling_effect_proseCreateWithoutLanguagesInput)
    create?: Array<item_fling_effect_proseCreateWithoutLanguagesInput>;

    @Field(() => [item_fling_effect_proseCreateOrConnectWithoutLanguagesInput], {nullable:true})
    @Type(() => item_fling_effect_proseCreateOrConnectWithoutLanguagesInput)
    connectOrCreate?: Array<item_fling_effect_proseCreateOrConnectWithoutLanguagesInput>;

    @Field(() => [item_fling_effect_proseWhereUniqueInput], {nullable:true})
    @Type(() => item_fling_effect_proseWhereUniqueInput)
    connect?: Array<item_fling_effect_proseWhereUniqueInput>;
}
