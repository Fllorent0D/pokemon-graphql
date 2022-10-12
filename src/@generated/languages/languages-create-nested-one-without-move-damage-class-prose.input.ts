import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { languagesCreateWithoutMove_damage_class_proseInput } from './languages-create-without-move-damage-class-prose.input';
import { Type } from 'class-transformer';
import { languagesCreateOrConnectWithoutMove_damage_class_proseInput } from './languages-create-or-connect-without-move-damage-class-prose.input';
import { languagesWhereUniqueInput } from './languages-where-unique.input';

@InputType()
export class languagesCreateNestedOneWithoutMove_damage_class_proseInput {

    @Field(() => languagesCreateWithoutMove_damage_class_proseInput, {nullable:true})
    @Type(() => languagesCreateWithoutMove_damage_class_proseInput)
    create?: languagesCreateWithoutMove_damage_class_proseInput;

    @Field(() => languagesCreateOrConnectWithoutMove_damage_class_proseInput, {nullable:true})
    @Type(() => languagesCreateOrConnectWithoutMove_damage_class_proseInput)
    connectOrCreate?: languagesCreateOrConnectWithoutMove_damage_class_proseInput;

    @Field(() => languagesWhereUniqueInput, {nullable:true})
    @Type(() => languagesWhereUniqueInput)
    connect?: languagesWhereUniqueInput;
}
