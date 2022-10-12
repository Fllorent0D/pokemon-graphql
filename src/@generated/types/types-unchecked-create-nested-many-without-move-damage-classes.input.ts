import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { typesCreateWithoutMove_damage_classesInput } from './types-create-without-move-damage-classes.input';
import { Type } from 'class-transformer';
import { typesCreateOrConnectWithoutMove_damage_classesInput } from './types-create-or-connect-without-move-damage-classes.input';
import { typesWhereUniqueInput } from './types-where-unique.input';

@InputType()
export class typesUncheckedCreateNestedManyWithoutMove_damage_classesInput {

    @Field(() => [typesCreateWithoutMove_damage_classesInput], {nullable:true})
    @Type(() => typesCreateWithoutMove_damage_classesInput)
    create?: Array<typesCreateWithoutMove_damage_classesInput>;

    @Field(() => [typesCreateOrConnectWithoutMove_damage_classesInput], {nullable:true})
    @Type(() => typesCreateOrConnectWithoutMove_damage_classesInput)
    connectOrCreate?: Array<typesCreateOrConnectWithoutMove_damage_classesInput>;

    @Field(() => [typesWhereUniqueInput], {nullable:true})
    @Type(() => typesWhereUniqueInput)
    connect?: Array<typesWhereUniqueInput>;
}
